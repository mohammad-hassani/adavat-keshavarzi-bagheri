import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { ArrowRight } from "react-feather";
import Head from "next/head";
import SingleCard from "@/components/SingleCard";
import Image from "next/image";
import {
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  PhoneIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="ادوات کشاورزی باقری | تولید و فروش انواع ادوات کشاورزی برای تمامی باغات و مزارع "
        />
        <meta
          name="keywords"
          content="ادوات کشاورزی,ادوات کشاورزی باقری, ادوات کشاورزی باقری و پسران"
        />
        <meta name="author" content="عماد باقری" />
        <meta name="url" content="https://adavat-keshavarzi-bagheri.ir" />
        <meta name="copyright" content="adavat keshavarzi bagheri" />
        <meta name="Classification" content="Personal" />
        <meta name="abstract" content="ادوات کشاورزی باقری" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* TODO: icon must set */}
        <link
          rel="shortcut icon"
          href="https://hasani.id.ir/assets/bl33hIcon-01f3a8f7.png?raw=tru"
        />
      </Head>
      <Page title="ادوات کشاورزی باقری">
        <div className="">
          <section className="flex flex-col-reverse items-center my-40 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-between w-full h-full my-auto">
              <h1 className="text-2xl font-bold text-center text-blue">
                ادوات کشاورزی باقری و پسران
              </h1>
              <h2 className="mx-4 my-10 text-center ">
                در کارگاه ما، ما به ایجاد ادوات کشاورزی با کیفیت بالا برای رفع
                نیازهای متنوع کشاورزان و تقویت شیوه های کشاورزی مفتخریم.{" "}
              </h2>
              <Link
                href={"tell:09137357024"}
                className="self-center px-3 py-4 text-white shadow-lg rounded-xl bg-cyan-500 w-min whitespace-nowrap"
              >
                برای مشاوره و خرید تماس بگیرید
              </Link>
              <p className="flex self-center my-4 gap-x-2">
                09137357024 <PhoneIcon className="w-6" />
              </p>
            </div>
            {/* ما در
                این صنعت بسیاز کنجکاو هستیم و تلاش می کنیم راه حل های پیشرفته ای
                را برای چالش های کشاورزی مدرن ارائه دهیم. تیم ما متشکل از طراحان
                و صنعتگران ماهر تضمین می کند که هر ابزار با دقت و توجه به جزئیات
                ساخته شده است و دوام و عملکرد مطلوب را در این زمینه تضمین می
                کند. در صورتی که نیاز به ترمینال کامل فراوری پسته تر و خشک و یا
                سایر ابزارآلات کشاورزی دارید میتوانید با ما در ارتباط باشید.
               */}
            <div>
              <Image src={""} alt="" className="w-[300px] h-[300px] " />
            </div>
          </section>
          <section className="flex flex-col items-center justify-center mb-32">
            <h2 className="mb-10 text-2xl font-bold text-center text-blue w-min whitespace-nowrap">
              محصولات ما
            </h2>
            <div className="flex flex-col items-center justify-center w-full gap-8 mx-4 gap-y-8">
              <div className="flex flex-col gap-8 xl:flex-row">
                <SingleCard />
                <SingleCard />
              </div>
              <div className="flex flex-col gap-8 xl:flex-row">
                <SingleCard />
                <SingleCard />
              </div>
            </div>
            <Link
              href="/posts"
              className="flex p-4 mt-10 font-bold border border-blue rounded-2xl text-blue"
            >
              مشاهده همه محصولات
            </Link>
          </section>
          <section className="flex flex-col justify-center mb-20 gap-y-4 lg:flex-row gap-x-8">
            <Image
              src=""
              className="w-[500px] h-[250px] rounded-xl border shadow-2xl"
              alt=""
            />
            <Image
              src=""
              className="w-[500px] h-[250px] rounded-xl border shadow-2xl"
              alt=""
            />
          </section>
          <section className="flex flex-col items-center justify-center mb-10">
            <h2 className="mb-10 text-2xl font-bold text-center text-blue w-min whitespace-nowrap">
              دسته بندی ها
            </h2>
            <div className="flex flex-wrap justify-center max-w-xs gap-y-4 gap-x-8 ">
              <div>
                <Image
                  src=""
                  className="w-20 h-20 mb-2 border rounded-full shadow-lg"
                  alt=""
                />
                <p> دسته بندی</p>
              </div>
              <div>
                <Image
                  src=""
                  className="w-20 h-20 mb-2 border rounded-full shadow-lg"
                  alt=""
                />
                <p> دسته بندی</p>
              </div>
              <div>
                <Image
                  src=""
                  className="w-20 h-20 mb-2 border rounded-full shadow-lg"
                  alt=""
                />
                <p> دسته بندی</p>
              </div>
              <div>
                <Image
                  src=""
                  className="w-20 h-20 mb-2 border rounded-full shadow-lg"
                  alt=""
                />
                <p> دسته بندی</p>
              </div>
              <div>
                <Image
                  src=""
                  className="w-20 h-20 mb-2 border rounded-full shadow-lg"
                  alt=""
                />
                <p> دسته بندی</p>
              </div>
            </div>
          </section>
          <section className="flex flex-col justify-center w-full p-10 my-40 text-white bg-blue-600 shadow-2xl lg:flex-row gap-y-4 gap-x-8 rounded-3xl ">
            <div className="flex flex-col items-center text-center w-60">
              <Image src={""} className="w-40 h-40 rouded-full" alt="" />
              <h2 className="mt-2 text-lg font-bold">hi</h2>
              <p>
                ی شرایط فعلی تکنولوژی مورد نیاز،ی شرایط فعلی تکنولوژی مورد
                نیاز،ی شرایط فعلی تکنولوژی مورد نیاز،ی شرایط فعلی تکنولوژی مورد
                نیاز،
              </p>
            </div>
            <div className="flex flex-col items-center text-center w-60">
              <Image src={""} className="w-40 h-40 rouded-full" alt="" />
              <h2 className="mt-2 text-lg font-bold">hi</h2>
              <p>
                {" "}
                و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
              </p>
            </div>
            <div className="flex flex-col items-center text-center w-60">
              <Image src={""} className="w-40 h-40 rouded-full" alt="" />
              <h2 className="mt-2 text-lg font-bold">hi</h2>
              <p>
                {" "}
                زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه{" "}
              </p>
            </div>
          </section>
          <hr />
          <section className="flex flex-col justify-between mt-10">
            <h2 className="self-center mb-10 text-3xl te-center w-min whitespace-nowrap">
              مشاوره و خرید
            </h2>
            <Link
                href={"tell:09137357024"}
                className="self-center px-3 py-4 text-white shadow-lg rounded-xl bg-cyan-500 w-min whitespace-nowrap"
              >
                برای مشاوره و خرید تماس بگیرید
              </Link>
              <p className="flex self-center my-4 gap-x-2">
                09137357024 <PhoneIcon className="w-6" />
              </p>
          </section>
        </div>
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles.slice(0, 5),
    },
  };
};

export default Home;
