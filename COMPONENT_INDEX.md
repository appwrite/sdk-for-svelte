# Component Index

## Components

- [`Appwrite`](#appwrite)
- [`AuthEmail`](#authemail)
- [`AuthOAuth2`](#authoauth2)
- [`Browser`](#browser)
- [`Collection`](#collection)
- [`Continents`](#continents)
- [`Countries`](#countries)
- [`Create`](#create)
- [`CreditCard`](#creditcard)
- [`Delete`](#delete)
- [`Document`](#document)
- [`Favicon`](#favicon)
- [`File`](#file)
- [`FileList`](#filelist)
- [`Flag`](#flag)
- [`Function`](#function)
- [`Image`](#image)
- [`Languages`](#languages)
- [`Locale`](#locale)
- [`Preferences`](#preferences)
- [`QR`](#qr)
- [`RecoverPassword`](#recoverpassword)
- [`Storage`](#storage)
- [`Update`](#update)
- [`User`](#user)
- [`Verification`](#verification)

---

## `Appwrite`

### Props

| Prop name | Kind             | Reactive | Type                | Default value     | Description |
| :-------- | :--------------- | :------- | :------------------ | ----------------- | ----------- |
| endpoint  | <code>let</code> | No       | <code>string</code> | --                | --          |
| project   | <code>let</code> | No       | <code>string</code> | --                | --          |
| locale    | <code>let</code> | No       | <code>string</code> | <code>"en"</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `AuthEmail`

### Props

None.

### Slots

| Slot name | Default | Props                                                                              | Fallback |
| :-------- | :------ | :--------------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ authorize: (email: string, password: string) => Promise<object>; } </code> | --       |
| error     | No      | <code>{ error: object } </code>                                                    | --       |
| loading   | No      | --                                                                                 | --       |
| success   | No      | <code>{ user: any } </code>                                                        | --       |

### Events

| Event name | Type       | Detail |
| :--------- | :--------- | :----- |
| success    | dispatched | --     |
| failure    | dispatched | --     |

## `AuthOAuth2`

### Props

| Prop name | Kind             | Reactive | Type | Default value | Description |
| :-------- | :--------------- | :------- | :--- | ------------- | ----------- |
| provider  | <code>let</code> | No       | --   | --            | --          |
| success   | <code>let</code> | No       | --   | --            | --          |
| failure   | <code>let</code> | No       | --   | --            | --          |

### Slots

| Slot name | Default | Props                                                                                                 | Fallback |
| :-------- | :------ | :---------------------------------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ authorize: (provider: string, success: string, failure: string) => Promise<object>; } </code> | --       |

### Events

None.

## `Browser`

### Props

| Prop name | Kind             | Reactive | Type                | Default value    | Description |
| :-------- | :--------------- | :------- | :------------------ | ---------------- | ----------- |
| code      | <code>let</code> | No       | --                  | --               | --          |
| width     | <code>let</code> | No       | <code>number</code> | <code>100</code> | --          |
| height    | <code>let</code> | No       | <code>number</code> | <code>100</code> | --          |
| quality   | <code>let</code> | No       | <code>number</code> | <code>100</code> | --          |

### Slots

| Slot name | Default | Props                      | Fallback |
| :-------- | :------ | :------------------------- | :------- |
| --        | Yes     | <code>{ src: any } </code> | --       |

### Events

None.

## `Collection`

### Props

| Prop name  | Kind             | Reactive | Type                  | Default value         | Description |
| :--------- | :--------------- | :------- | :-------------------- | --------------------- | ----------- |
| id         | <code>let</code> | No       | <code>string</code>   | --                    | --          |
| filters    | <code>let</code> | No       | <code>string[]</code> | <code>[]</code>       | --          |
| offset     | <code>let</code> | No       | <code>number</code>   | <code>0</code>        | --          |
| limit      | <code>let</code> | No       | <code>number</code>   | <code>25</code>       | --          |
| orderField | <code>let</code> | No       | <code>string</code>   | <code>""</code>       | --          |
| orderType  | <code>let</code> | No       | <code>string</code>   | <code>""</code>       | --          |
| orderCast  | <code>let</code> | No       | <code>string</code>   | <code>"string"</code> | --          |
| search     | <code>let</code> | No       | <code>string</code>   | <code>""</code>       | --          |
| cache      | <code>let</code> | No       | <code>boolean</code>  | <code>false</code>    | --          |

### Slots

| Slot name | Default | Props                                                                                                                                                      | Fallback |
| :-------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ documents: any[]; actions: { reload: () => Promise<object>; create: (data: any, read?: string[], write?: string[]) => Promise<object>; } } </code> | --       |
| error     | No      | <code>{ error: object } </code>                                                                                                                            | --       |
| loading   | No      | --                                                                                                                                                         | --       |

### Events

None.

## `Continents`

### Props

None.

### Slots

| Slot name | Default | Props                                                                         | Fallback |
| :-------- | :------ | :---------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ continents: any; actions: { reload: () => Promise<object>; }} </code> | --       |
| error     | No      | <code>{ error: object } </code>                                               | --       |
| loading   | No      | --                                                                            | --       |

### Events

None.

## `Countries`

### Props

| Prop name | Kind             | Reactive | Type                 | Default value      | Description |
| :-------- | :--------------- | :------- | :------------------- | ------------------ | ----------- |
| eu        | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |

### Slots

| Slot name | Default | Props                                                                        | Fallback |
| :-------- | :------ | :--------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ countries: any; actions: { reload: () => Promise<object>; }} </code> | --       |
| error     | No      | <code>{ error: object } </code>                                              | --       |
| loading   | No      | --                                                                           | --       |

### Events

None.

## `Create`

### Props

None.

### Slots

| Slot name | Default | Props                                                                                                       | Fallback |
| :-------- | :------ | :---------------------------------------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ actions: { create: (email: string, password: string, name?: string) => Promise<object>; } } </code> | --       |

### Events

| Event name | Type       | Detail |
| :--------- | :--------- | :----- |
| success    | dispatched | --     |
| failure    | dispatched | --     |

## `CreditCard`

### Props

| Prop name | Kind             | Reactive | Type                | Default value    | Description |
| :-------- | :--------------- | :------- | :------------------ | ---------------- | ----------- |
| code      | <code>let</code> | No       | --                  | --               | --          |
| width     | <code>let</code> | No       | <code>number</code> | <code>100</code> | --          |
| height    | <code>let</code> | No       | <code>number</code> | <code>100</code> | --          |
| quality   | <code>let</code> | No       | <code>number</code> | <code>100</code> | --          |

### Slots

| Slot name | Default | Props                      | Fallback |
| :-------- | :------ | :------------------------- | :------- |
| --        | Yes     | <code>{ src: any } </code> | --       |

### Events

None.

## `Delete`

### Props

None.

### Slots

| Slot name | Default | Props                                                         | Fallback |
| :-------- | :------ | :------------------------------------------------------------ | :------- |
| --        | Yes     | <code>{ actions: { delete: () => Promise<object>; } } </code> | --       |

### Events

None.

## `Document`

### Props

| Prop name  | Kind             | Reactive | Type                 | Default value | Description |
| :--------- | :--------------- | :------- | :------------------- | ------------- | ----------- |
| document   | <code>let</code> | Yes      | <code>any</code>     | --            | --          |
| collection | <code>let</code> | Yes      | <code>string</code>  | --            | --          |
| id         | <code>let</code> | Yes      | <code>string</code>  | --            | --          |
| cache      | <code>let</code> | No       | <code>boolean</code> | --            | --          |

### Slots

| Slot name | Default | Props                                                                                                                                               | Fallback |
| :-------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ document: any; actions: { reload: () => Promise<object>; update: (data: any) => Promise<object>; remove: () => Promise<object>; } } </code> | --       |
| error     | No      | <code>{ error: any } </code>                                                                                                                        | --       |
| loading   | No      | --                                                                                                                                                  | --       |

### Events

| Event name | Type       | Detail |
| :--------- | :--------- | :----- |
| change     | dispatched | --     |

## `Favicon`

### Props

| Prop name | Kind             | Reactive | Type | Default value | Description |
| :-------- | :--------------- | :------- | :--- | ------------- | ----------- |
| url       | <code>let</code> | No       | --   | --            | --          |

### Slots

| Slot name | Default | Props                      | Fallback |
| :-------- | :------ | :------------------------- | :------- |
| --        | Yes     | <code>{ src: any } </code> | --       |

### Events

None.

## `File`

### Props

| Prop name | Kind             | Reactive | Type | Default value | Description |
| :-------- | :--------------- | :------- | :--- | ------------- | ----------- |
| file      | <code>let</code> | No       | --   | --            | --          |

### Slots

| Slot name | Default | Props                                                                                                                                                                                                                                                                                              | Fallback |
| :-------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ file: any; actions: { download: () => string; view: (as?: string) => string; preview: (width?: string, height?: string, quality?: string, background?: string, output?: string) => string; update: (read?: any, write?: any) => Promise<object>; delete: () => Promise<object>; }} </code> | --       |
| error     | No      | <code>{ error: object } </code>                                                                                                                                                                                                                                                                    | --       |

### Events

None.

## `FileList`

### Props

| Prop name | Kind             | Reactive | Type                | Default value      | Description |
| :-------- | :--------------- | :------- | :------------------ | ------------------ | ----------- |
| search    | <code>let</code> | No       | <code>string</code> | <code>""</code>    | --          |
| limit     | <code>let</code> | No       | <code>number</code> | <code>25</code>    | --          |
| offset    | <code>let</code> | No       | <code>number</code> | <code>0</code>     | --          |
| orderType | <code>let</code> | No       | <code>string</code> | <code>"ASC"</code> | --          |

### Slots

| Slot name | Default | Props                                                                      | Fallback |
| :-------- | :------ | :------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ files: any[]; actions: { reload: () => Promise<object>; }} </code> | --       |
| error     | No      | <code>{ error: object } </code>                                            | --       |
| loading   | No      | --                                                                         | --       |

### Events

None.

## `Flag`

### Props

| Prop name | Kind             | Reactive | Type                | Default value    | Description |
| :-------- | :--------------- | :------- | :------------------ | ---------------- | ----------- |
| code      | <code>let</code> | No       | --                  | --               | --          |
| width     | <code>let</code> | No       | <code>number</code> | <code>100</code> | --          |
| height    | <code>let</code> | No       | <code>number</code> | <code>100</code> | --          |
| quality   | <code>let</code> | No       | <code>number</code> | <code>100</code> | --          |

### Slots

| Slot name | Default | Props                      | Fallback |
| :-------- | :------ | :------------------------- | :------- |
| --        | Yes     | <code>{ src: any } </code> | --       |

### Events

None.

## `Function`

### Props

| Prop name | Kind             | Reactive | Type                | Default value   | Description |
| :-------- | :--------------- | :------- | :------------------ | --------------- | ----------- |
| id        | <code>let</code> | No       | --                  | --              | --          |
| search    | <code>let</code> | No       | <code>string</code> | <code>""</code> | --          |
| limit     | <code>let</code> | No       | <code>number</code> | <code>25</code> | --          |
| offset    | <code>let</code> | No       | <code>number</code> | <code>0</code>  | --          |
| orderType | <code>let</code> | No       | <code>string</code> | <code>""</code> | --          |

### Slots

| Slot name | Default | Props                                                                                                                                                     | Fallback |
| :-------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ executions: any; actions: { reload: () => Promise<object>; create: () => Promise<object>; get: (execution: string) => Promise<object>; }} </code> | --       |
| error     | No      | <code>{ error: object } </code>                                                                                                                           | --       |
| loading   | No      | --                                                                                                                                                        | --       |

### Events

None.

## `Image`

### Props

| Prop name | Kind             | Reactive | Type                | Default value   | Description |
| :-------- | :--------------- | :------- | :------------------ | --------------- | ----------- |
| url       | <code>let</code> | No       | --                  | --              | --          |
| width     | <code>let</code> | No       | <code>string</code> | <code>""</code> | --          |
| height    | <code>let</code> | No       | <code>string</code> | <code>""</code> | --          |

### Slots

| Slot name | Default | Props                      | Fallback |
| :-------- | :------ | :------------------------- | :------- |
| --        | Yes     | <code>{ src: any } </code> | --       |

### Events

None.

## `Languages`

### Props

None.

### Slots

| Slot name | Default | Props                                                                        | Fallback |
| :-------- | :------ | :--------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ languages: any; actions: { reload: () => Promise<object>; }} </code> | --       |
| error     | No      | <code>{ error: object } </code>                                              | --       |
| loading   | No      | --                                                                           | --       |

### Events

None.

## `Locale`

### Props

None.

### Slots

| Slot name | Default | Props                                                                   | Fallback |
| :-------- | :------ | :---------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ code: any; actions: { reload: () => Promise<object>; }} </code> | --       |
| error     | No      | <code>{ error: object } </code>                                         | --       |
| loading   | No      | --                                                                      | --       |

### Events

None.

## `Preferences`

### Props

None.

### Slots

| Slot name | Default | Props                                                                                                   | Fallback |
| :-------- | :------ | :------------------------------------------------------------------------------------------------------ | :------- |
| --        | Yes     | <code>{ actions: { reload: () => Promise<void>; update: (prefs: object) => Promise<object>; } } </code> | --       |
| error     | No      | <code>{ error: object } </code>                                                                         | --       |
| loading   | No      | --                                                                                                      | --       |

### Events

None.

## `QR`

### Props

| Prop name | Kind             | Reactive | Type                 | Default value      | Description |
| :-------- | :--------------- | :------- | :------------------- | ------------------ | ----------- |
| text      | <code>let</code> | No       | --                   | --                 | --          |
| size      | <code>let</code> | No       | <code>number</code>  | <code>400</code>   | --          |
| margin    | <code>let</code> | No       | <code>number</code>  | <code>1</code>     | --          |
| download  | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |

### Slots

| Slot name | Default | Props                      | Fallback |
| :-------- | :------ | :------------------------- | :------- |
| --        | Yes     | <code>{ src: any } </code> | --       |

### Events

None.

## `RecoverPassword`

### Props

None.

### Slots

| Slot name | Default | Props                                                                                                                                                                                      | Fallback |
| :-------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ actions: { recover: (email: string, url: string) => Promise<void>; complete: (user: string, secret: string, password: string, passwordAgain: string) => Promise<void>; } } </code> | --       |

### Events

None.

## `Storage`

### Props

None.

### Slots

| Slot name | Default | Props                                                                                                    | Fallback |
| :-------- | :------ | :------------------------------------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ actions: { create: (file: any, read?: string[], write?: string[]) => Promise<object>; }} </code> | --       |
| error     | No      | <code>{ error: object } </code>                                                                          | --       |

### Events

| Event name | Type       | Detail |
| :--------- | :--------- | :----- |
| upload     | dispatched | --     |
| success    | dispatched | --     |
| failure    | dispatched | --     |

## `Update`

### Props

None.

### Slots

| Slot name | Default | Props                                                                                                                                                                                                      | Fallback |
| :-------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ actions: { name: (name: string) => Promise<object>; email: (email: string, password: string) => Promise<object>; password: (password: string, oldPassword: string) => Promise<object>; } } </code> | --       |

### Events

None.

## `User`

### Types

```ts
export interface AppwriteUser {
  $id: string;
  email: string;
  emailVerification: boolean;
  name: string;
  registration: number;
  status: number;
  prefs: object;
}
```

### Props

None.

### Slots

| Slot name | Default | Props                                                                                                                                                                                     | Fallback |
| :-------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| --        | Yes     | <code>{ user: AppwriteUser; actions: { reload: () => void; logout: () => Promise<object>; logoutFrom: (session: string) => Promise<object>; logoutAll: () => Promise<object>; } } </code> | --       |
| error     | No      | <code>{ error: object } </code>                                                                                                                                                           | --       |
| loading   | No      | --                                                                                                                                                                                        | --       |

### Events

| Event name        | Type       | Detail |
| :---------------- | :--------- | :----- |
| success           | dispatched | --     |
| failure           | dispatched | --     |
| successLogout     | dispatched | --     |
| failureLogout     | dispatched | --     |
| successLogoutFrom | dispatched | --     |
| failureLogoutFrom | dispatched | --     |
| successLogoutAll  | dispatched | --     |
| failureLogoutAll  | dispatched | --     |

## `Verification`

### Props

None.

### Slots

| Slot name | Default | Props                                                                                                                                 | Fallback |
| :-------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------ | :------- |
| --        | Yes     | <code>{ actions: { create: (url: string) => Promise<object>; complete: (user: string, secret: string) => Promise<object>; } } </code> | --       |

### Events

None.
