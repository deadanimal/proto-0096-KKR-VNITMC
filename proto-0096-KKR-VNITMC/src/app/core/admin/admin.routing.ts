import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { ManagementAuditComponent } from "./management-audit/management-audit.component";
import { ManagementUserComponent } from "./management-user/management-user.component";
import { ReportComponent } from "./report/report.component";
import { ManagementRolesComponent } from "./management-roles/management-roles.component";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { TrafficSimulationAnalysisComponent } from "./traffic-simulation-analysis/traffic-simulation-analysis.component";
import { RoadCongestionMapComponent } from "./road-congestion-map/road-congestion-map.component";
import { JourneyPlannerComponent } from "./journey-planner/journey-planner.component";
import { SocialMediaComponent } from "./social-media/social-media.component";
import { MediaMonitoringComponent } from "./media-monitoring/media-monitoring.component";

export const AdminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "traffic-simulation",
        component: TrafficSimulationAnalysisComponent,
      },
      {
        path: "road-congestion",
        component: RoadCongestionMapComponent,
      },
      {
        path: "journey-planner",
        component: JourneyPlannerComponent,
      },
      {
        path: "social-media",
        children: [
          { path: "social-analysis", component: SocialMediaComponent },
          { path: "media-monitoring", component: MediaMonitoringComponent },
        ],
      },
      {
        path: "analytics",
        component: AnalyticsComponent,
      },
      {
        path: "report",
        component: ReportComponent,
      },
      {
        path: "management",
        children: [
          {
            path: "users",
            component: ManagementUserComponent,
          },
          {
            path: "roles",
            component: ManagementRolesComponent,
          },
          {
            path: "audit-trails",
            component: ManagementAuditComponent,
          },
        ],
      },
    ],
  },
];
