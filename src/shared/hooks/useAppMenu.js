import { useEffect, useState } from "react";
import appMenu from "../data/app-menu";
import { useHistory, useLocation } from "react-router-dom"

const getMenu = (col, parent) => {
    let flat = []
    for (let index = 0; index < col.length; index++) {
        const element = col[index];
        flat.push({ ...element, parent });
        if (element.subMenu && element.subMenu.length) {
            const sub = getMenu(element.subMenu, element.id);
            flat = [...flat, ...sub]
        }
    }
    return flat;
}

export const useAppMenu = () => {
    const history = useHistory();
    const location = useLocation();
    const [menuFlat, setMenuFlat] = useState();
    const [selectedMainMenu, setSelectedMainMenu] = useState({})
    const [selectedSubMenu, setSelectedSubMenu] = useState({})
    const [breadcrumbs, setBreadcrumbs] = useState()

    const historyListner = (location) => {
        const path = location.pathname;
        const [selectedMainMenu] = appMenu.filter(m => {
            const [routesStr] = m.routes && m.routes.filter(r => {
                const p = "^\\" + r;
                const regx = new RegExp(p, "g")
                return regx.test(path)
            })
            return !!routesStr;
        })
        setSelectedMainMenu(selectedMainMenu || {})
    }

    const getParent = (key, includeParent = false) => {
        if (key) {
            const [menu] = menuFlat.filter(m => m.id === key);
            if (menu && menu.parent) {
                const [parent] = includeParent ? menuFlat.filter(m => m.id === menu.parent) : menuFlat.filter(m => m.parent && m.id === menu.parent);
                return parent;
            }
        }
        return null;
    }

    useEffect(() => {
        setMenuFlat(getMenu(appMenu))
        historyListner(location)
    }, [])

    useEffect(() => {
        historyListner(location)
    }, [location])

    useEffect(() => {
        const path = location.pathname;
        if (menuFlat && selectedMainMenu) {
            const [selectedSub] = menuFlat.filter(m => m.parent).filter(m => {
                const [routesStr] = m.routes && m.routes.filter(r => {
                    const p = "^\\" + r;
                    const regx = new RegExp(p, "g")
                    return regx.test(path)
                })
                return !!routesStr;
            }).sort((a, b) => {
                const aRoute = a.routes[0];
                const bRoute = b.routes[0];
                return aRoute.length > bRoute.length ? -1 : aRoute.length < bRoute.length ? 1 : 0
            });

            if (!!selectedSub) {
                setSelectedSubMenu(selectedSub)
            } else {
                const [sub] = selectedMainMenu.subMenu || [];
                const [l3] = sub && sub.subMenu || []
                setSelectedSubMenu(l3 ? l3 : sub)
            }
        }
    }, [menuFlat, selectedMainMenu, location])

    useEffect(() => {
        setBreadcrumbs(null)
        if (selectedSubMenu && menuFlat) {
            let [m] = menuFlat.filter(m => m.id === selectedSubMenu.id);
            if (m) {
                let bc = [{ ...m }];
                while (m.parent) {
                    m = getParent(m.id, true)
                    bc = [{ ...m }, ...bc]
                }
                setBreadcrumbs(bc)
            }
        }
    }, [selectedSubMenu, menuFlat])

    return { topMenu: appMenu, selectedMainMenu, selectedSubMenu, history, getParent, breadcrumbs }
}