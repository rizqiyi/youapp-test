import Input from "@/components/Input";
import Image from "next/image";
import React from "react";

const Form = () => {
  return (
    <div>
      <div className="flex gap-[15px] items-center mb-[29px]">
        <Image src="/icons/upload-ic.svg" width={57} height={57} alt="upload" />
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
        <div className="flex items-center gap-[30px]">
          <div className="w-[100px] mw-[90px]">
            <h6 className="text-[13px] leading-normal text-[#ffffff54]">
              Gender:
            </h6>
          </div>
          <Input
            inputSize="sm"
            variant="outline"
            className="text-right"
            placeholder="Enter name"
          />
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
