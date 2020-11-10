import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const addDamagedDefect = async (
  formData: IDamagedDefect
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const damagedDefect: Omit<IDamagedDefect, "_id"> = {
      purchaseReceived: formData.purchaseReceived,
      orderNumber: formData.orderNumber,
      vendor: formData.vendor,
      skuNumber: formData.skuNumber,
      damageLevel: formData.damageLevel,
      offerDiscount: formData.offerDiscount,
      refundAmount: formData.refundAmount,
      narvarReturn: formData.narvarReturn,
      itemAmount: formData.itemAmount,
      damageDescription: formData.damageDescription,
      actionNeeded: formData.actionNeeded,
      image1: formData.image1,
      image2: formData.image2,
      image3: formData.image3,
    };
    const saveDamagedDefect: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/submit-damaged-defect",
      damagedDefect
    );
    return saveDamagedDefect;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllDamagedDefects = async (): Promise<
  AxiosResponse<ApiDataType>
> => {
  try {
    const damagedDefects: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/damaged-defects"
    );
    return damagedDefects;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateDamagedDefect = async (
  damagedDefect: IDamagedDefect,
  formData: IDamagedDefect
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const damagedDefectUpdate: Pick<
      IDamagedDefect,
      | "purchaseReceived"
      | "orderNumber"
      | "vendor"
      | "skuNumber"
      | "damageLevel"
      | "offerDiscount"
      | "refundAmount"
      | "narvarReturn"
      | "itemAmount"
      | "damageDescription"
      | "actionNeeded"
      | "image1"
      | "image2"
      | "image3"
    > = {
      purchaseReceived: formData.purchaseReceived,
      orderNumber: formData.orderNumber,
      vendor: formData.vendor,
      skuNumber: formData.skuNumber,
      damageLevel: formData.damageLevel,
      offerDiscount: formData.offerDiscount,
      refundAmount: formData.refundAmount,
      narvarReturn: formData.narvarReturn,
      itemAmount: formData.itemAmount,
      damageDescription: formData.damageDescription,
      actionNeeded: formData.actionNeeded,
      image1: formData.image1,
      image2: formData.image2,
      image3: formData.image3,
    };
    const updatedDamagedDefect: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/update-damaged-defect/${damagedDefect._id}`,
      damagedDefectUpdate
    );
    return updatedDamagedDefect;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteDamagedDefect = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedDamagedDefect: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-damaged-defect/${_id}`
    );
    return deletedDamagedDefect;
  } catch (error) {
    throw new Error(error);
  }
};
