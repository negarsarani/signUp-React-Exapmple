export interface inputtype  {
  placeholder: string;
  name: string;
  value: string;
  error: string;
  type: string;
  onChangeHandler?: any
  validateForm:(x:any)=>void
}
export interface formDatatype{
    username: string
    email: string
    password: string
    repeatPass: string
} 