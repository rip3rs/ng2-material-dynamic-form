export interface InputInterface {
  type: string,
  alias: string,
  attr:string,
  required: boolean,
  value?: string,
  order?: number,
  settings?: {
    disabled?: boolean,
    invert?: boolean,
    max?: number,
    min?: number,
    step?: number,
    thumbLabel?: boolean,
    tickInterval?: number,
    vertical?: boolean,
    checked?: boolean
  },
  options?: [
    {
      value?: string,
      key?: string
    }
  ]
}

// TODO: Change the interface to load based on the type.
