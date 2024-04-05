import excuteQuery from "@/app/db/db";
import moment from 'moment';

export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  const cache = searchParams.get("cache");

  try {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const dayStart = moment().subtract(i, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss');
      days.push(dayStart);
    }
    const dayCountsPromises = days.map(async (dayStart) => {
      try {
        const result: any = await excuteQuery("SELECT COUNT(*) AS count FROM bantin WHERE CreateDate >= ? AND CreateDate <= ?", [dayStart, moment(dayStart).endOf('day').format('YYYY-MM-DD HH:mm:ss')]);
        return result[0].count;
      } catch (error) {
        console.error("Error counting posts for day", dayStart, error);
        return 0;
      }
    });
    const dayCounts = await Promise.all(dayCountsPromises);
    const totalDayPosts = dayCounts.reduce((sum, count) => sum + count, 0);
    const totalLast7DaysPosts = dayCounts.reduce((sum, count) => sum + count, 0)

    const months = [];
    for (let i = 0; i < 12; i++) {
      const monthStart = moment().subtract(i, 'months').startOf('month').format('YYYY-MM-DD HH:mm:ss');
      const monthEnd = moment(monthStart).endOf('month').format('YYYY-MM-DD HH:mm:ss');
      months.push({ start: monthStart, end: monthEnd });
    }
    const monthCountsPromises = months.map(async (month) => {
      try {
        const result: any = await excuteQuery("SELECT COUNT(*) AS count FROM bantin WHERE CreateDate >= ? AND CreateDate <= ?", [month.start, month.end]);
        return result[0].count;
      } catch (error) {
        console.error("Error counting posts for month", month.start, error);
        return 0;
      }
    });

    const monthCounts = await Promise.all(monthCountsPromises);

    const totalCountResult: any = await excuteQuery("SELECT COUNT(*) AS totalCount FROM bantin", []);
    const totalCount = totalCountResult[0].totalCount;

    return new Response(JSON.stringify({
      month: monthCounts,
      day: dayCounts[0],
      week: totalLast7DaysPosts,
      lastWeek: dayCounts,
      totalCount: totalCount
    }), { status: 200 });
  } catch (error) {
    console.log(error);
    // Nếu có lỗi xảy ra, trả về mã lỗi 500
    return new Response("Error", { status: 500 });
  }
}
