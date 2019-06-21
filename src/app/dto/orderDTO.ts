import {OrderDetailDTO} from './orderDetailDTO';

export class OrderDTO {
  private orderDetailDTOS: OrderDetailDTO[];
  public name: string;
  constructor(public oid: number, public cid: number, public date: string, public total: number ) {
  }

  public getorderDetailDTOS(): OrderDetailDTO[] {
    return this.orderDetailDTOS;
  }

  public setorderDetailDTOS(value: OrderDetailDTO[]) {
    this.orderDetailDTOS = value;
  }
  public setname(name: string) {
    this.name = name;
  }
  public _name() {
    return this.name;
  }
}
