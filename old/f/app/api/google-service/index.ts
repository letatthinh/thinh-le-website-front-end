//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.0.8.0 (NJsonSchema v11.0.1.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export class GoogleServiceApiClient {
  private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
    this.http = http ? http : window as any;
    this.baseUrl = baseUrl ?? "";
  }

  /**
   * @param folderId (optional)
   * @return Success
   */
  fetchImagesByFolderId(folderId: string | undefined): Promise<number> {
    let url_ = this.baseUrl + "/api/GoogleDrive/fetch-images-by-folder-id?";
    if (folderId === null)
      throw new Error("The parameter 'folderId' cannot be null.");
    else if (folderId !== undefined)
      url_ += "folderId=" + encodeURIComponent("" + folderId) + "&";
    url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
      method: "POST",
      headers: {
        "Accept": "text/plain"
      }
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processFetchImagesByFolderId(_response);
    });
  }

  protected processFetchImagesByFolderId(response: Response): Promise<number> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as number;
        return result200;
      });
    } else if (status === 500) {
      return response.text().then((_responseText) => {
        return throwException("Server Error", status, _responseText, _headers);
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      });
    }
    return Promise.resolve<number>(null as any);
  }

  /**
   * @return Success
   */
  getGoogleDriveImages(): Promise<GoogleDriveImageResponseDto[]> {
    let url_ = this.baseUrl + "/api/GoogleDrive/get-google-drive-images";
    url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
      method: "GET",
      headers: {
        "Accept": "text/plain"
      }
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processGetGoogleDriveImages(_response);
    });
  }

  protected processGetGoogleDriveImages(response: Response): Promise<GoogleDriveImageResponseDto[]> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as GoogleDriveImageResponseDto[];
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      });
    }
    return Promise.resolve<GoogleDriveImageResponseDto[]>(null as any);
  }
}

export interface GoogleDriveImageResponseDto {
  fileId?: string | undefined;
  name?: string | undefined;
  source?: string | undefined;
  width?: number;
  height?: number;
}

export class GoogleServiceApiException extends Error {
  override message: string;
  status: number;
  response: string;
  headers: { [key: string]: any; };
  result: any;

  constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isGoogleServiceApiException = true;

  static isGoogleServiceApiException(obj: any): obj is GoogleServiceApiException {
    return obj.isGoogleServiceApiException === true;
  }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
  if (result !== null && result !== undefined)
    throw result;
  else
    throw new GoogleServiceApiException(message, status, response, headers, null);
}