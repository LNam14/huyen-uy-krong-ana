import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Select,
  FormLabel,
  MenuItem,
} from "@mui/material";
import { getCookie } from "cookies-next";
import { useAppDispatch, useAppSelector } from "@/app/redux-store/hook";
import QuillEditor from "./QuillEditor";
import { createNews, getNewsWait } from "@/app/redux-store/news/slice";
import { getCategory, getCategoryList } from "@/app/redux-store/category/slice";
import { fireStoreConfig } from "@/app/firebase/route";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";

interface LooseObject {
  [key: string]: any;
}

interface CategoryItem {
  ID: number;
  TenDanhMuc: string;
  CreateBy: string;
  CreateDate: string;
}

const CreateNews = ({ open, closeForm }: { open: boolean; closeForm: any }) => {
  const dispatch = useAppDispatch();
  const categoryList: CategoryItem[] = useAppSelector(getCategoryList);
  const [categoryListState, setCategoryListState] = useState<CategoryItem[]>(
    []
  );

  useEffect(() => {
    const asyncCall = async () => {
      await dispatch(getCategory());
    };
    asyncCall();
  }, []);

  useEffect(() => {
    if (categoryList) {
      setCategoryListState(categoryList);
    }
  }, [categoryList]);

  const username = getCookie("username");
  const [data, setData] = useState<LooseObject>({
    TenDanhMuc: "",
    CreateBy: username,
    TacGia: "",
    TieuDeChinh: "",
    TieuDePhu: "",
    NoiDung: "",
    HinhAnh: "",
  });

  const [image, setImage] = useState<File>();
  const [isUploading, setIsUploading] = useState(false);

  const authApp = fireStoreConfig();
  const storage: any = authApp;

  const handleSelectFile = (files: FileList | null) => {
    if (files && files[0] && files[0].size < 1000000) {
      setImage(files[0]);
      const selectedFile = files[0];
      const imageUrl = URL.createObjectURL(selectedFile);
    } else {
      console.error("Error: File not found or file size is too large.");
    }
  };

  const handleImageUpload = async () => {
    try {
      if (image) {
        const storageRef = ref((await storage).storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);

        setIsUploading(true);
        const imageUrl = await getDownloadURL(storageRef);
        console.log("Image uploaded. Download URL:", imageUrl);
        setData({
          ...data,
          HinhAnh: imageUrl,
        });
        alert;
        setIsUploading(false);
        return imageUrl;
      }

      return null;
    } catch (error: any) {
      console.error("Error uploading image:", error.message);
      return null;
    }
  };

  const handleSave = async () => {
    alert("Thêm thành công!");
    await dispatch(createNews({ data }));
    await dispatch(getNewsWait());
    console.log(data, "data");

    closeForm();
  };

  const handleContentChange = (content: string) => {
    setData({
      ...data,
      NoiDung: content,
    });
  };

  return (
    <Modal open={open} onClose={closeForm}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 5,
          overflowY: "auto",
          maxHeight: 700,
        }}
      >
        <Typography textAlign={"center"} fontSize={20} fontWeight={500}>
          Thêm Mới Bản Tin
        </Typography>
        <FormLabel>
          Tiêu đề chính
          <TextField
            fullWidth
            name="TieuDeChinh"
            value={data.TieuDeChinh}
            onChange={(e) =>
              setData({
                ...data,
                TieuDeChinh: e.target.value,
              })
            }
            sx={{ marginBottom: 2 }}
            size="small"
          />
        </FormLabel>
        <FormLabel>
          Tiêu đề phụ
          <TextField
            sx={{ marginBottom: 2 }}
            fullWidth
            name="TieuDePhu"
            value={data.TieuDePhu}
            onChange={(e) =>
              setData({
                ...data,
                TieuDePhu: e.target.value,
              })
            }
            size="small"
          />
        </FormLabel>
        <FormLabel>
          Danh mục
          <Select
            fullWidth
            name="TenDanhMuc"
            size="small"
            sx={{ marginBottom: 2 }}
            value={data.TenDanhMuc}
            onChange={(e) =>
              setData({
                ...data,
                TenDanhMuc: e.target.value as string,
              })
            }
          >
            {categoryListState.map((category) => (
              <MenuItem key={category.ID} value={category.TenDanhMuc}>
                {category.TenDanhMuc}
              </MenuItem>
            ))}
          </Select>
        </FormLabel>
        <FormLabel>
          Hình ảnh
          <input
            type="file"
            onChange={(e) => handleSelectFile(e.target.files)}
          />
        </FormLabel>
        <FormLabel>
          Nội dung
          <QuillEditor onContentChange={handleContentChange} />
        </FormLabel>
        <Box display={"flex"} justifyContent={"space-between"} marginTop={2}>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              handleImageUpload();
            }}
          >
            Thêm ảnh
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              handleImageUpload();
              handleSave();
            }}
          >
            Thêm mới
          </Button>

          <Button variant="contained" color="success" onClick={closeForm}>
            Đóng
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateNews;
