export interface Mail {
  address(): Promise<string>

  password(): Promise<string>

  delete(): Promise<void>
}