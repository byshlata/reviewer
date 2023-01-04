import { AppSettingsResponseType, UserResponseType } from 'types';

export type ResponseType<T> = T & UserResponseType & AppSettingsResponseType;
