import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DetailsService } from './services/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DetailsService]
})
export class DetailComponent {
  state$ = this.details.state$;
  constructor(private details: DetailsService) {}
}
