"use client";

import React, { ChangeEvent, useState } from "react";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Image from "next/image";

const Form = () => {
  const [file, setFile] = useState<File | null>(null);

  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    setFile(file);

    // Read the file and set the preview
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPreview(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <div className="flex gap-[15px] items-center mb-[29px]">
        <label htmlFor="upload">
          <span aria-hidden="true">
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-[57px] h-[57px] rounded-[17px] object-cover"
              />
            )}

            {(!preview || !file) && (
              <Image
                src={"/icons/upload-ic.svg"}
                width={57}
                height={57}
                alt="upload"
              />
            )}
          </span>
          <input
            onChange={handleFileChange}
            type="file"
            id="upload"
            className="hidden"
          />
        </label>
        <h6 className="text-[12px] leading-normal text-white">Add image</h6>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-[30px]">
          <div className="w-[100px] mw-[90px]">
            <h6 className="text-[13px] leading-normal text-[#ffffff54]">
              Display name:
            </h6>
          </div>
          <Input
            inputSize="sm"
            variant="outline"
            className="text-right"
            placeholder="Enter name"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[100px] mw-[90px]">
            <h6 className="text-[13px] leading-normal text-[#ffffff54]">
              Gender:
            </h6>
          </div>
          <div className="relative">
            <Select isSearchable={false} placeholder="Select gender" />
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="w-[100px] mw-[90px]">
            <h6 className="text-[13px] leading-normal text-[#ffffff54]">
              Birthday:
            </h6>
          </div>
          <Input
            inputSize="sm"
            variant="outline"
            className="text-right"
            placeholder="DD MM YYYY"
          />
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="w-[100px] mw-[90px]">
            <h6 className="text-[13px] leading-normal text-[#ffffff54]">
              Horoscope:
            </h6>
          </div>
          <Input
            inputSize="sm"
            variant="outline"
            className="text-right"
            placeholder="--"
            disabled
          />
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="w-[100px] mw-[90px]">
            <h6 className="text-[13px] leading-normal text-[#ffffff54]">
              Zodiac:
            </h6>
          </div>
          <Input
            inputSize="sm"
            variant="outline"
            className="text-right"
            placeholder="--"
            disabled
          />
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="w-[100px] mw-[90px]">
            <h6 className="text-[13px] leading-normal text-[#ffffff54]">
              Height:
            </h6>
          </div>
          <Input
            inputSize="sm"
            variant="outline"
            className="text-right"
            placeholder="Add height"
          />
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="w-[100px] mw-[90px]">
            <h6 className="text-[13px] leading-normal text-[#ffffff54]">
              Weight:
            </h6>
          </div>
          <Input
            inputSize="sm"
            variant="outline"
            className="text-right"
            placeholder="Add weight"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
