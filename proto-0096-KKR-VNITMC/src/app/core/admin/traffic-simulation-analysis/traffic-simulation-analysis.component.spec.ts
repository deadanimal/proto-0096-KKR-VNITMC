import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficSimulationAnalysisComponent } from './traffic-simulation-analysis.component';

describe('TrafficSimulationAnalysisComponent', () => {
  let component: TrafficSimulationAnalysisComponent;
  let fixture: ComponentFixture<TrafficSimulationAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficSimulationAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficSimulationAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
