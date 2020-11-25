import { BehaviorSubject } from 'rxjs';
import { SwaggerService } from '../../api/SawggerService';

class ContextService {
  allFiles$ = new BehaviorSubject([]);
  selectedFile$ = new BehaviorSubject(null);

  constructor() {
    this.api = new SwaggerService();
  }
  setSelectedFile(file) {
    this.selectedFile$.next(file);
  }

  loadFiles() {
    this.api.getAllFiles().then((f) => {
      this.allFiles$.next(f);
      this.setSelectedFile(f[0]);
    });
  }
}

export default new ContextService();
