import React, { useEffect, useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { useAppDispatch } from "@/app/redux-store/hook";
import { getCategory, updateCategory } from "@/app/redux-store/category/slice";

interface LooseObject {
  [key: string]: any;
}

const UpdateCategory = ({
  open,
  closeForm,
  category,
}: {
  open: boolean;
  closeForm: any;
  category: any;
}) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<LooseObject>({
    TenDanhMuc: "",
    ID: 0,
  });

  useEffect(() => {
    if (category) {
      setData({
        TenDanhMuc: category.TenDanhMuc,
        ID: category.ID,
      });
    }
  }, [category]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    await dispatch(updateCategory(data));
    await dispatch(getCategory());
    closeForm();
  };

  return (
    <Modal open={open} onClose={closeForm}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 5,
        }}
      >
        <Typography textAlign={"center"} fontSize={20} fontWeight={500}>
          Chỉnh Sửa Danh Mục
        </Typography>
        <Typography fontSize={16} fontWeight={500} marginTop={2} marginLeft={1}>
          ID : {data.ID}
        </Typography>
        <TextField
          fullWidth
          label="Tên Danh Mục"
          name="TenDanhMuc"
          value={data.TenDanhMuc}
          onChange={(e) =>
            setData({
              ...data,
              TenDanhMuc: e.target.value,
            })
          }
          margin="normal"
          size="small"
        />
        <Box display={"flex"} justifyContent={"space-between"} marginTop={2}>
          <Button variant="contained" color="success" onClick={handleSave}>
            Chỉnh sửa
          </Button>
          <Button variant="contained" color="success" onClick={closeForm}>
            Đóng
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UpdateCategory;
