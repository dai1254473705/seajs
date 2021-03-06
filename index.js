/*===================================================================
#    FileName: js-util-lib.js
#      Author: daiyunzhou
#       Email: 1254473705@qq.com
#  CreateTime: 2018-11-29 14:57
# Description: js-util-lib
#     Version: v1.0.1
# Updated by daiyunzhou 2018-11-29 14:57
===================================================================*/

import Query from './src/query';
import Validata from './src/validata';
import DataMask from './src/dataMask';
import ImageLib from './src/image';
import GUID from './src/guid';
import Device from './src/device';


// global
window.jsUtilLib = {
    query: new Query(),
    validata: new Validata(),
    dataMask: new DataMask(),
    image: new ImageLib(),
    guid: new GUID(),
    device: new Device(),
};