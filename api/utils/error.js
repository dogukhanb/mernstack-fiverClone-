const error = (status, message) => {
  // bir err nesnesi oluştur
  const err = new Error();

  // hata nesnesini güncelle
  err.message = message;
  err.status = status;
  return err;
};

export default error;
