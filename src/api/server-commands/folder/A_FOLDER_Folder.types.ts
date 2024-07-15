import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__ExtractProperties, A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";
import { A_FOLDER_TYPES__Folder_APIEntity } from "../../app-interactions/index.types";





// =========================  FOLDER LIST REQUEST API TYPES ================================
export type A_FOLDER_SERVER_COMMANDS_TYPES__FolderListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_FOLDER_SERVER_COMMANDS_TYPES__FolderListResponse = A_SDK_TYPES__IDefaultPagination<A_FOLDER_TYPES__Folder_APIEntity>




// =========================  FOLDER CONTENT REQUEST API TYPES ================================
export type A_FOLDER_SERVER_COMMANDS_TYPES__FolderContentListRequest = {
    /**
     * Folder identifier in ADAAS System
     */
    folderASEID: string,
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_FOLDER_SERVER_COMMANDS_TYPES__FolderContentListResponse = A_SDK_TYPES__IDefaultPagination<A_FOLDER_TYPES__Folder_APIEntity>



// =========================  FOLDER GET REQUEST API TYPES ================================
export type A_FOLDER_SERVER_COMMANDS_TYPES__FolderGetRequest = {
    /**
     * Folder identifier in ADAAS System
     */
    folderASEID: string,
}

export type A_FOLDER_SERVER_COMMANDS_TYPES__FolderGetResponse = A_SDK_TYPES__IDefaultPagination<A_FOLDER_TYPES__Folder_APIEntity>


// =========================  FOLDER CREATE REQUEST API TYPES ================================
export type A_FOLDER_SERVER_COMMANDS_TYPES__FolderCreateRequest = A_SDK_TYPES__ExtractProperties<A_FOLDER_TYPES__Folder_APIEntity, [

]>

export type A_FOLDER_SERVER_COMMANDS_TYPES__FolderCreateResponse = A_FOLDER_TYPES__Folder_APIEntity



// =========================  FOLDER UPDATE REQUEST API TYPES ================================
export type A_FOLDER_SERVER_COMMANDS_TYPES__FolderUpdateRequest = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_FOLDER_TYPES__Folder_APIEntity>, [
        'aseid'
    ]>

export type A_FOLDER_SERVER_COMMANDS_TYPES__FolderUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_FOLDER_TYPES__Folder_APIEntity>


// =========================  FOLDER DELETE REQUEST API TYPES ================================
export type A_FOLDER_SERVER_COMMANDS_TYPES__FolderDeleteRequest = {
    /**
     * Folder identifier in ADAAS System
     */
    aseid: string,
}

export type A_FOLDER_SERVER_COMMANDS_TYPES__FolderDeleteResponse = {
    status: 'OK' | 'ERROR',
}
