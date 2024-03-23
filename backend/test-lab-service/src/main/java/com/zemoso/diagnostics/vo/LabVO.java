package com.zemoso.diagnostics.vo;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LabVO {
    private int labId;
    private  String labName;
    private float rating;
    private int availableSlots;
}
