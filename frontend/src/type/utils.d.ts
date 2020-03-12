type scrollObject = { scrollTop: number; clientHeight: number; scrollHeight: number };
type selectList = { id: number; name: string; active: 0 | 1 }[];
type localCity = { exptime: number; cityNum: number; data: selectList };
type localState = { exptime: number; data: selectList };
type selectCityStorage = localCity[];
type day = { day: number; month: number; year: number };
