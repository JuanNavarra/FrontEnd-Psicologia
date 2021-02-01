import { Component, OnInit } from '@angular/core';
import { Faqs } from 'src/app/models/faqs';
import { FaqsService } from 'src/app/service/faqs.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  faqs: Faqs = new Faqs();

  constructor(private faqsService: FaqsService) { }

  ngOnInit(): void {
    this.faqsService.mostrarFaqs().subscribe(data => {
      this.faqs = data;
    })
  }

}
