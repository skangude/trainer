import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log-result',
  templateUrl: './log-result.component.html',
  styleUrls: ['./log-result.component.css']
})
export class LogResultComponent implements OnInit {
  todaysLogs:Array<any>;
  earlierLogs;
  constructor(private logService:LogService) { }

  ngOnInit() {
    this.logService.getLogs().subscribe(
      logs=>{
        let loggings = logs.filter(el=>el.type);
        let datedLogs=loggings.map(el=>{return {type:el.type, time:new Date(parseInt(el._id.substr(0,8),16)*1000)}});
        console.log(datedLogs);
        this.todaysLogs= datedLogs.filter(el=>new Date(el.time.valueOf()).setHours(0,0,0,0) ==new Date().setHours(0,0,0,0));
        this.earlierLogs = datedLogs.filter(el=>new Date(el.time.valueOf()).setHours(0,0,0,0) !=new Date().setHours(0,0,0,0));
      },
      err=>console.log(err)
    )
  }

}
