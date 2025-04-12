import Button from '@/components/shared/ui/Button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/shared/ui/Carousel';

export default function Home() {
  return (
    <section>
      <Carousel
        className="w-full"
        opts={{
          align: 'center',
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="h-[560px]">
            <img
              className="h-full w-full object-cover"
              src="images/banner1.avif"
            />
          </CarouselItem>
          <CarouselItem>
            <div className="flex h-full w-full items-center justify-center">
              <div className="z-[1] mb-28 flex flex-col items-center gap-y-2">
                <div className="text-mist font-title text-3xl font-bold">
                  ต้นไม้พรีเมียม พร้อมส่ง
                </div>
                <div className="text-mist text-lg">ต้นไม้พิเศษสำหรับคุณ</div>
                <Button className="my-8 text-sm font-bold">
                  สั่งซื้อต้นไม้
                </Button>
              </div>
              <img
                className="absolute h-full w-full object-cover"
                src="images/banner2.avif"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
