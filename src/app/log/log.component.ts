import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  type:string;
  logConstants:Array<any>;
  
  constructor(private route:ActivatedRoute, 
              private router: Router,
              private logService:LogService  ) {
    this.type = this.route.snapshot.data.type;
    this.logConstants = this.route.snapshot.data.logConstants;
  }

  logToSubmit:Array<any> = [];
  btnStatus:String[];
  ngOnInit() {
    this.logConstants.forEach(el => {
      el.sname = this.type+"_"+el.sname;
      let tmp=el;
      tmp.logString='notLogged';
      this.logToSubmit.push(tmp);
    });
  }

  updateLog(action_inaction,logInfo){
    this.logToSubmit.filter(el=>logInfo.sname==el.sname)[0].logString=action_inaction;
  }

  submitLog(){
    let logsSubmitted = [];
    this.logToSubmit.forEach(log=>{
      log.heading = undefined;
      log.fulltext = undefined;
      log.action = undefined
      log.inaction = undefined;
      logsSubmitted.push(JSON.parse(JSON.stringify(log)));
    });
    this.logService.postLog({type: this.type, logs:logsSubmitted}).subscribe(
      logging => {console.log(logging);this.router.navigate(['/logResult'])},
      error => console.log(error)
    )
  }

}
