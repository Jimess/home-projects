package lt.examples.core.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/core")
public class CoreController {

    @GetMapping("/getTest")
    public String getTest() {
        return "superTEst";
    }
}
