/**
Represents the FDTLocaleToUtc service.
@typedef {import('./core/locale_to_utc.service').default} FDTLocaleToUtc
@memberof module:core
*/
/**
Represents the FDTTimezone type.
@typedef {import('./core/fdt_timezone.type').default} FDTTimezone
@memberof module:core
*/
/**
Module exporting the FDTLocaleToUtc service and FDTTimezone type.
@module core
@see FDTLocaleToUtc
@see FDTTimezone
*/
export { default as FDTLocaleToUtc } from './core/locale_to_utc.service';
export { default as FDTTimezone } from './core/fdt_timezone.type';
