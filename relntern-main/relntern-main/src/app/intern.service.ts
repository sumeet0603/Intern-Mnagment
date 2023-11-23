import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Intern } from 'src/models/intern.mode';
import { Task } from 'src/models/task.mode';

@Injectable({
  providedIn: 'root',
})
export class InternService {

  searchInternsByName(fullname: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  API = 'http://localhost:8080';
  public registerIntern(interndetails: any) {
    return this.http.post(this.API + '/registerIntern', interndetails);
  }

  public getInterns() {
    return this.http.get(this.API + '/getInterns');
  }

  public deleteIntern(id: any) {
    return this.http.delete(this.API + '/deleteIntern?id=' + id);
  }

  public registerMentor(mentordetails: any) {
    return this.http.post(this.API + '/registerMentor', mentordetails);
  }

  public getMentor() {
    return this.http.get(this.API + '/getMentor');
  }

  public updateIntern(intern: any) {
    return this.http.put(this.API + '/updateIntern', intern);
  }


  public getInactiveInterns() {
    return this.http.get(this.API + '/getInactiveInterns');
  }


  public moveToInactive(internId: number) {
    return this.http.post(`${this.API}/${internId}/moveToInactive`, {});
  }

  public deleteInactiveIntern(id: any) {
    return this.http.delete(this.API + '/deleteInactiveIntern?id=' + id);
  }

  public deleteMentor(mentorid: any) {
    return this.http.delete(this.API + '/deleteMentor?mentorid=' + mentorid);
  }

  public registerTask(taskdetails: any,internId:any) {
    return this.http.post(this.API + '/registerTask/'+internId, taskdetails);
  }

  public getTask() {
    return this.http.get(this.API + '/getTask');
  }

  public getTaskById(internId:any) {
    return this.http.get(this.API + '/getTaskById/'+internId);
  }


  public deleteTask(id: any) {
    return this.http.delete(this.API + '/deleteTask?id=' + id);
  }

  public dataSource = new Subject<any>();
  data = this.dataSource.asObservable();
  sendData(data: any) {
    this.dataSource.next(data);
  }

  public getInternById(id:any){
    console.log(id)
    let url="http://localhost:8080/viewtask/"+id
    console.log(url)
    return this.http.get<Intern>(url)
  }
}
