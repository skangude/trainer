import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  type:string = '30min';
  logConstants:Array<any>;
  
  constructor(private route:ActivatedRoute  ) {
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
    
  }

}
