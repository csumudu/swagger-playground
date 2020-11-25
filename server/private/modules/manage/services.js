const path = require('path');
const fs = require('fs');

const manageService = () => {
  const upload = async (req, h) => {
    const db = req.server.plugins.store.DB;

    const {
      payload: { file },
    } = req;

    const filename = file.hapi.filename;
    const data = file._data;
    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '../../../public/files/' + filename),
        data,
        (err) => {
          if (err) {
            console.log(err);
            reject(err);
          }
          const fileList = db.getData('/files') || [];
          const [found] = fileList.filter((f) => f.name === filename);
          if (!found) {
            const files = db.push('/files[]', {
              id: fileList.length + 1,
              name: filename,
              displayName: filename.replace('.json', ''),
            });
          }

          resolve({ message: 'Upload successfully!' });
        },
      );
    });
  };

  const getFooterLinks = (req, h) => {
    const db = req.server.plugins.store.DB;
    const files = db.getData('/files') || [];

    return files;
  };

  return {
    upload,
    getFooterLinks,
  };
};

module.exports = manageService();
