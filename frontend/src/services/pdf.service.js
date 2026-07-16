import axios from "axios";

const API = axios.create({
  baseURL: "https://pdfly-w8rp.onrender.com/api/v1/pdf",
});
 export default API;

export const uploadPDF = async (file) => {
  const formData = new FormData();

  formData.append("pdf", file);

  const response = await API.post(
    "/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
export const mergePDF = async (files) => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("pdf", file);
  });

  const response = await API.post(
    "/merge",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },

      responseType: "blob",   // ⭐ IMPORTANT
    }
  );

  return response.data;
};

export const splitPDF = async (
  file,
  startPage,
  endPage
) => {

  const formData = new FormData();

  formData.append("pdf", file);
  formData.append("startPage", startPage);
  formData.append("endPage", endPage);

  const response = await API.post(
    "/split",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    }
  );

  return response.data;
};

export const compressPDF = async (
  file
) => {

  const formData = new FormData();

  formData.append("pdf", file);

  const response = await API.post(
    "/compress",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    }
  );

  return response.data;
};

export const rotatePDF = async (
  file,
  rotation
) => {

  const formData = new FormData();

  formData.append("pdf", file);
  formData.append("rotation", rotation);

  const response = await API.post(
    "/rotate",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    }
  );

  return response.data;

};

export const imageToPDF = async (
  files
) => {

  const formData = new FormData();

  files.forEach((file) => {
    formData.append("images", file);
  });

  const response = await API.post(
    "/image-to-pdf",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    }
  );

  return response.data;

};

export const watermarkPDF = async (
  file,
  watermark
) => {

  const formData = new FormData();

  formData.append("pdf", file);
  formData.append("watermark", watermark);

  const response = await API.post(
    "/watermark",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    }
  );

  return response.data;

};

export const pdfToImage = async (file) => {

  const formData = new FormData();

  formData.append("pdf", file);

  const response = await API.post(
    "/pdf-to-image",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    }
  );

  return response.data;

};

export const protectPDF = async (
  file,
  password,
  outputFileName
) => {

  const formData = new FormData();

  formData.append("pdf", file);
  formData.append("password", password);

  if (outputFileName) {
    formData.append("outputFileName", outputFileName);
  }

  const response = await API.post(
    "/protect",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    }
  );

  return response.data;
};
