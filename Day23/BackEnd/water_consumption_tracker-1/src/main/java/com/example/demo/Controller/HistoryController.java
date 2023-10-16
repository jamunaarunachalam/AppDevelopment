//package com.example.demo.Controller;
//
//import java.time.LocalDate;
//import java.util.ArrayList;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.dto.response.WaterIntakeDTO;
//import com.example.demo.service.WaterIntakeService;
//
//@RestController
//@RequestMapping("/api/history")
//public class HistoryController {
//	 @Autowired
//	    private WaterIntakeService waterIntakeService;
//
//	    @GetMapping("/dailyTotal")
//	    public List<WaterIntakeDTO> getDailyTotalForLastSevenDays(@RequestParam int userId) {
//	        LocalDate today = LocalDate.now();
//	        LocalDate sevenDaysAgo = today.minusDays(6); // Seven days ago
//
//	        List<WaterIntakeDTO> dailyTotalList = new ArrayList<>();
//	        for (LocalDate date = sevenDaysAgo; date.isBefore(today.plusDays(1)); date = date.plusDays(1)) {
//	            WaterIntakeDTO dto = waterIntakeService.getWaterIntakeDTOByDate(userId, date);
//	            dailyTotalList.add(dto);
//	        }
//
//	        return dailyTotalList;
//	    }
//
//}
