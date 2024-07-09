import {
    v4 as uuidv4
} from 'uuid'

// 生成一个随机字符串，且每次执行不能发生变化，游客身份持久
export const getUuid = () => {
    // 先从本地存储获取uuid游客身份
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    // 如果本地存储没有uuid
    if (!uuid_token) {
        // 生成临时游客身份,即生成一个随机字符串
        uuid_token = uuidv4();
        // 本地存储游客身份
        localStorage.setItem('UUIDTOKEN', uuid_token);
    }
    // 返回游客身份uuid
    return uuid_token;
}
