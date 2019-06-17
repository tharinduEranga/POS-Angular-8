import {OrderDetailDTO} from './orderDetailDTO';

export class OrderDTO {
  private orderDetailDTOS: OrderDetailDTO[];
  constructor(public oid: number, public cid: number, public date: string, public total: number ) {
  }

  public getorderDetailDTOS(): OrderDetailDTO[] {
    return this.orderDetailDTOS;
  }

  public setorderDetailDTOS(value: OrderDetailDTO[]) {
    this.orderDetailDTOS = value;
  }
}
