import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'flight-filter',
    templateUrl: './flight-filter.component.html',
    styleUrls: ['./flight-filter.component.scss']    
})

export class FlightFilterComponent implements OnInit {    

    filghtFilterForm: FormGroup = null;    
    
    constructor(private _fb: FormBuilder) {
        this.filghtFilterForm = this._fb.group({
            
        });
    }

    ngOnInit() {

    }   

}