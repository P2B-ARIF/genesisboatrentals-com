exports.responseReturn = async (res, status, data) => {
	res.status(status).json(data);
    return;
};
