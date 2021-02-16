import { Request } from './request';
import { Response } from './response';
export declare type Types = 'text' | 'document' | 'blob' | 'arraybuffer' | 'json';
export interface Options {
    type?: Types;
    withCredentials?: boolean;
    overrideMimeType?: string;
}
export declare function createTransport(options: Options): {
    use: ((request: Request, next: () => Promise<Response>) => Promise<Response>)[];
    abort: typeof abort;
    open(request: Request): Promise<Response>;
};
declare function abort(request: Request): void;
export {};