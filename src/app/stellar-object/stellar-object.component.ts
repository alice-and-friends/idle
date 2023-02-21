import {Component, Input, OnInit} from '@angular/core';
import {StellarObject} from "../models/stellar-object";

@Component({
  selector: 'app-stellar-object',
  templateUrl: './stellar-object.component.html',
  styleUrls: ['./stellar-object.component.scss'],
})
export class StellarObjectComponent implements OnInit {
  @Input() stellarObject!: StellarObject;

  ngOnInit() {}
}
