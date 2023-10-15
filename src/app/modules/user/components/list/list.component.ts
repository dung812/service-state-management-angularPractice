import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ListService } from "./services/list.service";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ListService],
})
export class ListComponent {
    state$ = this.list.state$;
    searchQuery = new FormControl("");

    constructor(private list: ListService) {
        this.searchQuery.valueChanges
        .pipe(debounceTime(500)).subscribe((value: any) => {
            this.list.setQuery({
                searchString: value,
            });
        });
    }

    ngOnInit() {
        this.list.setQuery({ });
    }

    onPageChanged(targetPage: number) {
        this.list.setQuery({
            page: targetPage,
        });
    }
    onSizeChanged(targetPageSize: number) {
      console.log(targetPageSize);
        this.list.setQuery({
            pageSize: targetPageSize,
        });
    }

    onCurrentPageDataChange(users: any) {
        console.log(users);
    }
}
