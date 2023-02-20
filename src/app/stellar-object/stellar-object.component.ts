import {Component, Input, OnInit} from '@angular/core';
import {AsteroidBelt} from "../models/asteroid-belt";
import {Star} from "../models/star";
import {Planet} from "../models/planet";

@Component({
  selector: 'app-stellar-object',
  templateUrl: './stellar-object.component.html',
  styleUrls: ['./stellar-object.component.scss'],
})
export class StellarObjectComponent implements OnInit {
  @Input() stellarObject!: Star | Planet | AsteroidBelt;

  ngOnInit() {}
}
