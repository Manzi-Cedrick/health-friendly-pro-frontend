import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/charts-info/chart.service';
import { IUser } from 'src/app/interface/memberType';

@Component({
  selector: 'app-table-patient',
  templateUrl: './table-patient.component.html',
  styleUrls: ['./table-patient.component.css']
})
export class TablePatientComponent  implements OnInit {
  protected dataInfo!: any[];
  selectedUserData: IUser | null = null; // Add this property to store selected user data
  showInfoDrawerComponent: boolean = false; // Add this property to show/hide info drawer component
  constructor(protected service: ChartService) {}
  public selectedUsername: string | null = null;
  currentPage = 1;
  itemsPerPage = 2;

  ngOnInit(): void {
    this.service.getChartInfo().subscribe((info: any) => {
      this.dataInfo = info;
    });
  }

  showInfoDrawer(data: any) {
    if (this.selectedUserData?.username === this.selectedUsername) {
      this.selectedUserData = null;
      this.selectedUsername = null;
    } else {
      this.selectedUserData = data;
      this.selectedUsername = data.username;
    }
  }
  get totalPages(): number {
    return Math.ceil(this.dataInfo.length / this.itemsPerPage);
  }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.dataInfo.slice(startIndex, startIndex + this.itemsPerPage);
  }
  getPageNumbers(): number[] {
    const pageNumbers = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }
}
