export type UniversityObj = {
  alpha_two_code: string;
  country: string;
  domains: string[];
  name: string;
  "state-province": null;
  web_pages: string[];
};

export interface Values{
  userName: string,
  fullName: string,
  age: string,
  country: string,
  mobileNumber: string,
  email: string,
  password: string, 
  cPassword: string,
}
export interface BooleanValues{
  userName: boolean,
  fullName: boolean,
  age: boolean,
  country: boolean,
  mobileNumber: boolean,
  email: boolean,
  password: boolean, 
  cPassword: boolean,
}

export interface Fields{
  inputField: string;
  handleChange: (e: React.ChangeEvent)=>void;
  handleBlur: (e :React.FocusEvent)=>void;
  values: Values;
  errors: Partial<Values> ;
  touched: Partial<BooleanValues> ;
  label: string;
}
//   alpha_two_code: "US"
// country: "United States"
// domains: ['marywood.edu']
// name: "Marywood University"
// state-province: null
// web_pages: ['http://www.marywood.edu']
