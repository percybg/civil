import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';;
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-step-one',
    templateUrl: './step-one.component.html',
    styleUrls: ['./step-one.component.scss'],
    standalone: false
})
export class StepOneComponent implements OnInit {
  @Input() insumoEstoque;
  @Input() opcaoConsulta:String;
  @Input() filtrarComplemento:Boolean;
  @Output() consultEstoque: EventEmitter<any> = new EventEmitter<void>();
  @Output() updateEstoque: EventEmitter<any> = new EventEmitter<void>();
  @Output() updateComplementoFilter: EventEmitter<any> = new EventEmitter<void>();
  hasLoad:Boolean = false;
  public groupRadio = [
    {name:'Central de Estoque',value:true,param:'CentralDeEstoque'},
    {name:'Demais Empreendimentos',value:false,param:'DemaisEmpreendimentos'}
  ]
  public formEstoque: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
  ) { }
  public get disabledButton(){
    return this.formEstoque.controls['saldoEstoque'].value == 0 && !this.centralEstoque;
  }
  public get quantidadeReservada(){
    return this.formEstoque.controls['quantidadeReservada'].value;
  }
  public get centralEstoque():Boolean{
    return this.formEstoque.controls['centralEstoque'].value == 'DemaisEmpreendimentos';
  }
  public get quantidadeRequisitada(){
    return this.formEstoque.controls['quantidadeRequisitada'].value;
  }
  public get filterComplement(){
    return this.formEstoque.controls['filterComplement'].value;
  }
  ngOnInit() {
    this.initForm();
  }
  changeComplement() {
    this.updateComplementoFilter.emit(this.filterComplement);
  }
  consult(){
    this.hasLoad = false;
    this.consultEstoque.emit();
    setTimeout(() =>{
      this.hasLoad = false;
    },200);
  }

  eventoMudancaRadio(event){
    this.updateEstoque.emit(event.target.value);
  }

  private initForm(): void {
    const {quantidadeRequisitada,quantidadeReservada,saldoEstoque,unidade} = this.insumoEstoque;
    this.formEstoque = this.formBuilder.group({
      quantidadeRequisitada:  [quantidadeRequisitada, [Validators.required]],
      quantidadeReservada:  [quantidadeReservada, [Validators.required]],
      saldoEstoque:  [saldoEstoque, [Validators.required]],
      unidade:  [unidade, [Validators.required]],
      centralEstoque: [this.opcaoConsulta, [Validators.required]],
      filterComplement: [this.filtrarComplemento, [Validators.required]],
    });

  }
}
