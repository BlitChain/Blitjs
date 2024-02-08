//@ts-nocheck
/**
* This file and any referenced files were automatically generated by @cosmology/telescope@1.4.12
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
export function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
export function base64FromBytes(arr) {
    const bin = [];
    arr.forEach((byte) => {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(''));
}
export function omitDefault(input) {
    if (typeof input === 'string') {
        return input === '' ? undefined : input;
    }
    if (typeof input === 'number') {
        return input === 0 ? undefined : input;
    }
    if (typeof input === 'bigint') {
        return input === BigInt(0) ? undefined : input;
    }
    throw new Error(`Got unsupported type ${typeof input}`);
}
export function toDuration(duration) {
    return {
        seconds: BigInt(Math.floor(parseInt(duration) / 1000000000)),
        nanos: parseInt(duration) % 1000000000
    };
}
export function fromDuration(duration) {
    return (parseInt(duration.seconds.toString()) * 1000000000 +
        duration.nanos).toString();
}
export function isSet(value) {
    return value !== null && value !== undefined;
}
export function isObject(value) {
    return typeof value === 'object' && value !== null;
}
export const setPaginationParams = (options, pagination) => {
    if (!pagination) {
        return options;
    }
    if (typeof pagination?.countTotal !== 'undefined') {
        options.params['pagination.count_total'] = pagination.countTotal;
    }
    if (typeof pagination?.key !== 'undefined') {
        // String to Uint8Array
        // let uint8arr = new Uint8Array(Buffer.from(data,'base64'));
        // Uint8Array to String
        options.params['pagination.key'] = Buffer.from(pagination.key).toString('base64');
    }
    if (typeof pagination?.limit !== 'undefined') {
        options.params['pagination.limit'] = pagination.limit.toString();
    }
    if (typeof pagination?.offset !== 'undefined') {
        options.params['pagination.offset'] = pagination.offset.toString();
    }
    if (typeof pagination?.reverse !== 'undefined') {
        options.params['pagination.reverse'] = pagination.reverse;
    }
    return options;
};
export function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return {
        seconds,
        nanos
    };
}
export function fromTimestamp(t) {
    let millis = Number(t.seconds) * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
const timestampFromJSON = (object) => {
    return {
        seconds: isSet(object.seconds)
            ? BigInt(object.seconds.toString())
            : BigInt(0),
        nanos: isSet(object.nanos) ? Number(object.nanos) : 0
    };
};
export function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return toTimestamp(o);
    }
    else if (typeof o === 'string') {
        return toTimestamp(new Date(o));
    }
    else {
        return timestampFromJSON(o);
    }
}
function numberToLong(number) {
    return BigInt(Math.trunc(number));
}
//# sourceMappingURL=helpers.js.map