declare function handleRequest(event: any, requestId: any): Promise<Response>;
declare function resolveMainClient(event: any): Promise<any>;
declare function getResponse(event: any, client: any, requestId: any): Promise<Response>;
declare function sendToClient(client: any, message: any): Promise<any>;
declare function sleep(timeMs: any): Promise<any>;
declare function respondWithMock(response: any): Promise<Response>;
/**
 * Mock Service Worker (1.2.3).
 * @see https://github.com/mswjs/msw
 * - Please do NOT modify this file.
 * - Please do NOT serve this file on production.
 */
declare const INTEGRITY_CHECKSUM: "3d6b9f06410d179a7f7404d4bf4c3c70";
declare const activeClientIds: Set<any>;
//# sourceMappingURL=mockServiceWorker.d.ts.map