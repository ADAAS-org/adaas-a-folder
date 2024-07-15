import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__ExtractProperties, A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";
import { A_FOLDER_TYPES__File_APIEntity } from "../../app-interactions/index.types";
export type A_FOLDER_SERVER_COMMANDS_TYPES__FileListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_FOLDER_SERVER_COMMANDS_TYPES__FileListResponse = A_SDK_TYPES__IDefaultPagination<A_FOLDER_TYPES__File_APIEntity>;
export type A_FOLDER_SERVER_COMMANDS_TYPES__FileGetRequest = {
    /**
     *File identifier in ADAAS System
     */
    fileASEID: string;
};
export type A_FOLDER_SERVER_COMMANDS_TYPES__FileGetResponse = A_SDK_TYPES__IDefaultPagination<A_FOLDER_TYPES__File_APIEntity>;
export type A_FOLDER_SERVER_COMMANDS_TYPES__FileCreateRequest = A_SDK_TYPES__ExtractProperties<A_FOLDER_TYPES__File_APIEntity, [
]>;
export type A_FOLDER_SERVER_COMMANDS_TYPES__FileCreateResponse = A_FOLDER_TYPES__File_APIEntity;
export type A_FOLDER_SERVER_COMMANDS_TYPES__FileUpdateRequest = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_FOLDER_TYPES__File_APIEntity>, [
    'aseid'
]>;
export type A_FOLDER_SERVER_COMMANDS_TYPES__FileUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_FOLDER_TYPES__File_APIEntity>;
export type A_FOLDER_SERVER_COMMANDS_TYPES__FileDeleteRequest = {
    /**
     *File identifier in ADAAS System
     */
    aseid: string;
};
export type A_FOLDER_SERVER_COMMANDS_TYPES__FileDeleteResponse = {
    status: 'OK' | 'ERROR';
};
