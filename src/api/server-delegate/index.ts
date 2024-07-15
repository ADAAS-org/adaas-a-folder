import { A_FOLDER_Context } from "@adaas/a-sdk/global/A_FOLDER_Context.class";
import { A_FOLDER_SERVER_DELEGATE__FolderAPI } from "./folder/A_FOLDER_Folder.api";
import { A_FOLDER_SERVER_DELEGATE__FileAPI } from "./file/A_FOLDER_File.api";

export const Folder = new A_FOLDER_SERVER_DELEGATE__FolderAPI(A_FOLDER_Context);
export const File = new A_FOLDER_SERVER_DELEGATE__FileAPI(A_FOLDER_Context);
