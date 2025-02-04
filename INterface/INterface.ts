export interface IUsers{
    id:number;
    discription:string;
    name:string;
    price:number|string
    img:string
    category:string
    isOutline:false
    onClick:string
  }

export interface IButton{
  text:string;

}

export interface IChef{
  id: number;
  name: string;
  position: string;
  img:string
}