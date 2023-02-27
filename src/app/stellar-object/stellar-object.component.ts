import {Component, Input, OnInit} from '@angular/core';
import {IStellarObject} from "../models/i-stellar-object";

@Component({
  selector: 'app-stellar-object',
  templateUrl: './stellar-object.component.html',
  styleUrls: ['./stellar-object.component.scss'],
})
export class StellarObjectComponent implements OnInit {
  @Input() stellarObject!: IStellarObject;

  ngOnInit() {}
}
