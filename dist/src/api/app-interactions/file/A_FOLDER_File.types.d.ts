import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__ExtractProperties, A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";
export type A_FOLDER_TYPES__File_APIEntity = {
    id: number;
    aseid: string;
    /**
    * User who created this organization
    */
    owner: string;
    adaas_sso_role_aseid: string;
    adaas_arc_scope_aseid: string;
    created_at: string;
    updated_at: string;
};
export type A_FOLDER_APP_INTERACTIONS_TYPES__FileListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_FOLDER_APP_INTERACTIONS_TYPES__FileListResponse = A_SDK_TYPES__IDefaultPagination<A_FOLDER_TYPES__File_APIEntity>;
export type A_FOLDER_APP_INTERACTIONS_TYPES__FileGetRequest = {
    /**
     *File identifier in ADAAS System
     */
    fileASEID: string;
};
export type A_FOLDER_APP_INTERACTIONS_TYPES__FileGetResponse = A_SDK_TYPES__IDefaultPagination<A_FOLDER_TYPES__File_APIEntity>;
export type A_FOLDER_APP_INTERACTIONS_TYPES__FileCreateRequest = A_SDK_TYPES__ExtractProperties<A_FOLDER_TYPES__File_APIEntity, [
]>;
export type A_FOLDER_APP_INTERACTIONS_TYPES__FileCreateResponse = A_FOLDER_TYPES__File_APIEntity;
export type A_FOLDER_APP_INTERACTIONS_TYPES__FileUpdateRequest = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_FOLDER_TYPES__File_APIEntity>, [
    'aseid'
]>;
export type A_FOLDER_APP_INTERACTIONS_TYPES__FileUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_FOLDER_TYPES__File_APIEntity>;
export type A_FOLDER_APP_INTERACTIONS_TYPES__FileDeleteRequest = {
    /**
     *File identifier in ADAAS System
     */
    aseid: string;
};
export type A_FOLDER_APP_INTERACTIONS_TYPES__FileDeleteResponse = {
    status: 'OK' | 'ERROR';
};
