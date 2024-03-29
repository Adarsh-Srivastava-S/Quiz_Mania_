package com.exam.model.image;


import com.exam.model.User;
import com.exam.model.leaderboard.Leaderboard;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Arrays;
import java.util.Objects;

@Entity
@Table(name = "image")

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Image implements Serializable {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "image", unique = false, nullable = false, length = 100000)
    private byte[] image;
//    @OneToOne(mappedBy = "image")
//    @JsonIgnore
//    Leaderboard leaderboard;

    @OneToOne(mappedBy = "image",cascade = CascadeType.ALL)
            @JsonIgnore
    User user;
    @Override
    public String toString() {
        return "Image{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", image=" + (image != null ? Arrays.toString(image) : null) +
                '}';
    }

//    @Override
//    public int hashCode() {
//        return Objects.hash(id, name, type, Arrays.hashCode(image));
//    }
}