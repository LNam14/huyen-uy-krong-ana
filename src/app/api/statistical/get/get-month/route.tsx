import excuteQuery from "@/app/db/db";
import moment from 'moment';
export async function GET(req: any) {
    const { searchParams } = new URL(req.url);
    const cache = searchParams.get("cache");

    try {

        const days30 = [];
        for (let i = 0; i < 30; i++) {
            const dayStart = moment().subtract(i, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss');
            days30.push(dayStart);
        }

        const dayCounts30Promises = days30.map(async (dayStart) => {
            try {
                const result: any = await excuteQuery("SELECT COUNT(*) AS count FROM bantin WHERE CreateDate >= ? AND CreateDate <= ?", [dayStart, moment(dayStart).endOf('day').format('YYYY-MM-DD HH:mm:ss')]);
                return result[0].count;
            } catch (error) {
                console.error("Error counting posts for day", dayStart, error);
                return 0;
            }
        });

        const dayCounts30 = await Promise.all(dayCounts30Promises);
        const totalLast30DaysPosts = dayCounts30.reduce((sum, count) => sum + count, 0);

        return new Response(JSON.stringify({
            last30Days: totalLast30DaysPosts,
        }), { status: 200 });

    } catch (error) {
        console.log(error);
        // Nếu có lỗi xảy ra, trả về mã lỗi 500
        return new Response("Error", { status: 500 });
    }
}